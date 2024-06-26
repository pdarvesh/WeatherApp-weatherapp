import { bootstrapApplication } from '@angular/platform-browser';
import { EnvironmentalVariables } from './app/Environment/EnvironmentVariables';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ...appConfig.providers // Spread the providers from appConfig if any
  ]
})
.catch(err => console.error(err));


// bootstrapApplication(AppComponent, appConfig
//   )
//   .catch((err) => console.error(err));



//   bootstrapApplication(AppComponent, {
//     providers: [
//       provideHttpClient() // Add HttpClient provider here
//     ]
//   })
//   .catch(err => console.error(err));