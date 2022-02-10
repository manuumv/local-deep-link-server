NODE

Instalar dependencias

```bash
npm i
```

Iniciar server

```bash
npm start
```

Iniciar server con [nodemon](https://github.com/remy/nodemon) (cambios en tiempo real)

```bash
npm start:nodemon
```

Variables de entorno:
|  VARIABLE | DESCRIPCIÓN  |  VALOR POR DEFECTO |
|---|---|---|
|  PORT | puerto en el que se inicia el server  | 80  |
|  SUBDOMAIN | nombre del dominio del tunnel  | deeplink  |


Iniciar server con variables de entorno:

```bash
PORT=1000 SUBDOMAIN=app npm start
```

IOS

El archivo que se expone para ios se encuentra en src/assets/apple-app-site-association.json.

Actualizar el appID de la aplicación y la config deseada:
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "${TEAM_ID}.${BUNDLE_ID}",
        "paths": [
          "*"
        ]
      }
    ]
  }
}
```

En xcode abrir el xcodeproj -> pestaña signing & capabilities -> pestaña debug.

Actualizar con el dominio que nos genera node sin el https:
>       applinks:deeplink.loca.lt
por defecto es deeplink o la variable de entorno subdomain con la que se haya iniciado.

Para comprobar que funciona correctamente con el emulador abierto lanzar en la consola:
```bash
xcrun simctl openurl booted https://deeplink.loca.lt
```

ANDROID

Actualizar el archivo assetlinks:
```json
[
  {
    "relation": [
      "delegate_permission/common.handle_all_urls"
    ],
    "target": {
      "namespace": "${NAME_SPACE}",
      "package_name": "${BUNDLE_ID}",
      "sha256_cert_fingerprints": ["${SHA256_FINGERPRINTS}"]
    }
  }
]
````

Generar SHA256 cert fingerprint:

```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```
Con el assetlinks.json configurado y el emulador abierto lanzar en consola:

```bash
adb shell am start -a android.intent.action.VIEW \
        -c android.intent.category.BROWSABLE \
        -d "https://deeplink.loca.lt"
```
