package com.jayor.mx.warehouse.query;

import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;
import android.window.OnBackInvokedDispatcher;

import com.getcapacitor.BridgeActivity;

import androidx.annotation.RequiresApi;
import androidx.core.os.BuildCompat;

@BuildCompat.PrereleaseSdkCheck public class MainActivity extends BridgeActivity {

    private boolean doubleBackToExitPressedOnce = false;
    private static final int TIME_INTERVAL = 2000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onBackPressed() {
        if (doubleBackToExitPressedOnce) {
            super.onBackPressed();
            finish();
            return;
        }

        this.doubleBackToExitPressedOnce = true;
        Toast.makeText(this, "Presiona otra vez para salir", Toast.LENGTH_SHORT).show();

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                doubleBackToExitPressedOnce = false;
            }
        }, TIME_INTERVAL);
    }
}
