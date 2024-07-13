import { TestBed } from '@angular/core/testing';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { AllproductsService } from './allproducts.service';

class MockRouter {
  navigate(path: string[]) {}
}

describe('CanactivateGuard', () => {
  let guard: CanactivateGuard;
  let allproductsService: AllproductsService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AllproductsService,
        { provide: Router, useClass: MockRouter }
      ]
    });

    allproductsService = TestBed.inject(AllproductsService);
    router = TestBed.inject(Router);
    guard = new CanactivateGuard(allproductsService,router);

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([{ email: 'test@example.com', password: 'password123' }]));
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation with valid credentials', () => {
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;

    allproductsService.email = 'test@example.com';
    allproductsService.password = 'password123';

    const canActivate = guard.canActivate(route, state);
    expect(canActivate).toBe(true);
  });

  it('should prevent navigation with invalid credentials', () => {
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;

    allproductsService.email = 'invalid@example.com';
    allproductsService.password = 'wrongpassword';

    const canActivate = guard.canActivate(route, state);
    expect(canActivate).toBe(false);
  });

  it('should redirect to login on authentication failure', () => {
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;
    spyOn(router, 'navigate');

    allproductsService.email = 'invalid@example.com';
    allproductsService.password = 'wrongpassword';

    guard.canActivate(route, state);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  // Add more specific tests for your guard logic as needed
});
