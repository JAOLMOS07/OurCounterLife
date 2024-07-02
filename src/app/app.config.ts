import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "ourcounterlife",
        appId: "1:624385579971:web:b4dddb2c2da19007a7bb76",
        storageBucket: "ourcounterlife.appspot.com",
        apiKey: "AIzaSyD6VNLLAkc2I1B9C9cZPJbwBrJLSUd_nG4",
        authDomain: "ourcounterlife.firebaseapp.com",
        messagingSenderId: "624385579971",
        measurementId: "G-N7PWP4J5ZJ",
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
