# For Android Deploy

## Capacitor

Config file in /capacitor.config.ts.

### Generate native project

Generate the native project, if it does not already exist.

```bash
npx cap add android
```

## Open Capacitor project on Android Studio

```bash
npx cap open android
```

### Running

Develop the Ionic app and sync it to the native project.

```bash
ionic capacitor copy android
```

### Live Reload (Only web, no device mount)

To start a live-reload server run the following command.

```bash
ionic capacitor run android -l --external
```

## Commit changes to native project and Open project at Android Studio

```bash
ionic build
ionic capacitor run android -l --external
```

## Commit changes to native project and run on Connected Device

```bash
ionic build --prod
npx @capacitor/assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222' --splashBackgroundColor '#eeeeee' --splashBackgroundColorDark '#111111'
ionic capacitor sync android
npx cap run android --prod
npx cap open android
```

## Run on Android studio and generate Resource Images Device

```bash
ionic build --prod
npx cap add android
npx @capacitor/assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222' --splashBackgroundColor '#eeeeee' --splashBackgroundColorDark '#111111'
ionic capacitor sync android --prod
ionic capacitor open android
```

## Run on ios and generate Resource Images Device

```bash
ionic build --prod
ionic capacitor add ios
npx @capacitor/assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222' --splashBackgroundColor '#eeeeee' --splashBackgroundColorDark '#111111'
ionic capacitor sync ios --prod
ionic capacitor open ios
```

## Keys
keystore: `/keystore/upload-labjayor-keystore.jks`
keystore pass: `J@y0r.1234?`
key alias: `labjayor`
key alias pass: `J@y0r.1234?`

> More info: [Android Development - Ionic Docs](https://ionicframework.com/docs/developing/android).
> More info: [Capacitor Assets](https://github.com/ionic-team/capacitor-assets).

App Transport Security Settings
    * Allow Arbitrary Loads > YES

### Assets
```bash
    npx capacitor-assets generate [--android|--ios]
```