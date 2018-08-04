// Import the core angular services.
import { ActivatedRouteSnapshot } from "@angular/router";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { PRIMARY_OUTLET } from "@angular/router";
import { Router } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { UrlTree } from "@angular/router";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
@Injectable()
export class BlockRefresh implements CanActivate {

    private router: Router;

    // I initialize the secondary-view route guard.
    constructor( router: Router ) {

        this.router = router;

        window.onbeforeunload = (ev) => {
            // finally return the message to browser api.
            var dialogText = 'Changes that you made may not be saved.';
            ev.returnValue = dialogText;
            return dialogText;
    }; 

    }

    // ---
    // PUBLIC METHODS.
    // ---
    // I determine if the requested route can be activated (ie, navigated to).
    public canActivate(
        activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot
        ) : boolean {

        // We don't want to render this secondary view on page-refresh. As such, if this
        // is a page-refresh, we'll navigate to the same URL less the secondary outlet.
        if ( this.isPageRefresh() ) {

            console.warn( "refresh not allowed" );
            
            location.href = '/music';

            return( false );

        }

        return( true );

    }

    // I determine if the current route-request is part of a page refresh.
    private isPageRefresh() : boolean {

        // If the router has yet to establish a single navigation, it means that this
        // navigation is the first attempt to reconcile the application state with the
        // URL state. Meaning, this is a page refresh.
        return( ! this.router.navigated );

    }

}