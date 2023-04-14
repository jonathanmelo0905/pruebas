import { Route } from "@angular/router";
import { Prueba2Component } from "./prueba2/prueba2.component";
import { HeaderComponent } from "@ventas-habitat/ui";

export const appRoutes: Route[] = [
    {
      path: 'inicio',
      component: Prueba2Component,
    },
    {
        path: 'libreria',
        component: HeaderComponent
    }
];
