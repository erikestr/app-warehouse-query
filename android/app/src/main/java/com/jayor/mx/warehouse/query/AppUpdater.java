package com.jayor.mx.warehouse.query;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.IntentSender;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.google.android.play.core.appupdate.AppUpdateInfo;
import com.google.android.play.core.appupdate.AppUpdateManager;
import com.google.android.play.core.appupdate.AppUpdateManagerFactory;
import com.google.android.play.core.install.model.AppUpdateType;
import com.google.android.play.core.install.model.UpdateAvailability;
import com.google.android.play.core.tasks.OnFailureListener;
import com.google.android.play.core.tasks.Task;

public class AppUpdater extends AppCompatActivity {
    private AppUpdateManager appUpdateManager;
    private static final int IMMEDIATE_APP_UPDATE_REQ_CODE = 2399;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_app_updater);
        appUpdateManager = AppUpdateManagerFactory.create(getApplicationContext());
        checkUpdate();
    }

    private void checkUpdate() {
        Task<AppUpdateInfo> appUpdateInfoTask = appUpdateManager.getAppUpdateInfo();

        appUpdateInfoTask.addOnSuccessListener(appUpdateInfo -> {

            if(appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE
                    && appUpdateInfo.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE)) {
                Log.d("[WHAREHOUSE.UPDATER]", "checkUpdate: updater > UPDATE_AVAILABLE & IMMEDIATE");
                Toast.makeText(getApplicationContext(), "Actualización disponible", Toast.LENGTH_LONG).show();
                startUpdateFlow(appUpdateInfo);
            } else if(appUpdateInfo.updateAvailability() == UpdateAvailability.DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS){
                Log.d("[WHAREHOUSE.UPDATER]", "checkUpdate: updater > DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS");
                Toast.makeText(getApplicationContext(), "Actualización en proceso...", Toast.LENGTH_LONG).show();
                startUpdateFlow(appUpdateInfo);
            } else if(appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_NOT_AVAILABLE){
                Log.d("[WHAREHOUSE.UPDATER]", "checkUpdate: updater > UPDATE_NOT_AVAILABLE");
                startActivity(new Intent(AppUpdater.this, MainActivity.class));
                finish();
            } else if(appUpdateInfo.updateAvailability() == UpdateAvailability.UNKNOWN){
                Log.d("[WHAREHOUSE.UPDATER]", "checkUpdate: updater > UNKNOWN");
                startActivity(new Intent(AppUpdater.this, MainActivity.class));
                finish();
            }
        });

        appUpdateInfoTask.addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                Log.d("[WHAREHOUSE.UPDATER]", "checkUpdate: updater > FAIL");
                Toast.makeText(getApplicationContext(), "Fallo la actualización!", Toast.LENGTH_LONG).show();
                startActivity(new Intent(AppUpdater.this, MainActivity.class));
                finish();
            }
        });
    }

    private void startUpdateFlow(AppUpdateInfo appUpdateInfo) {
        try {
            appUpdateManager.startUpdateFlowForResult(appUpdateInfo, AppUpdateType.IMMEDIATE, this, AppUpdater.IMMEDIATE_APP_UPDATE_REQ_CODE);
        } catch (IntentSender.SendIntentException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == IMMEDIATE_APP_UPDATE_REQ_CODE) {
            if (resultCode == RESULT_CANCELED) {
                Log.d("[WHAREHOUSE.UPDATER]", "onActivityResult: action > cancelled");
            } else if (resultCode == RESULT_OK) {
                Log.d("[WHAREHOUSE.UPDATER]", "onActivityResult: action > ok");
                startActivity(new Intent(this, MainActivity.class));
                finish();
            } else {
                checkUpdate();
            }
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d("[WHAREHOUSE.UPDATER]", "onResume: action > resume");
//        startActivity(new Intent(this, MainActivity.class));
//        finish();
    }
}