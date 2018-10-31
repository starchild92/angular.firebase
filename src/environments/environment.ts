// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBM-NpLA-H3Lbjbs95b2p-bBw9C8YNbHWg",
        authDomain: "fir-crud-4a6fe.firebaseapp.com",
        databaseURL: "https://fir-crud-4a6fe.firebaseio.com",
        projectId: "fir-crud-4a6fe",
        storageBucket: "fir-crud-4a6fe.appspot.com",
        messagingSenderId: "629370069172"
    }
};

export const ENDPOINT = 'https://us-central1-fir-crud-4a6fe.cloudfunctions.net/tasks'
