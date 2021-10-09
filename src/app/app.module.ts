import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { PatientRegisterComponent } from './account/patient-register/patient-register.component';
import { ReqAppointmentComponent } from './_components/req-appointment/req-appointment.component';
import { ViewVaccineBatchComponent } from './_components/view-vaccine-batch/view-vaccine-batch.component';
import { MaterialModule } from './materials/material.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReqAppointmentComponent,
        ViewVaccineBatchComponent,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        PatientRegisterComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };