<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\UserController;

use App\Http\Controllers\Common\DepartmentController;
use App\Http\Controllers\Common\DesignationController;


 // Register Routes
 Route::post('/register',[AuthController::class, 'Register']);


 // Login Routes
 Route::post('/login',[AuthController::class, 'Login']);

  // Current User Route
Route::get('/user',[UserController::class, 'User']);



 Route::get('/getdepartments',[DepartmentController::class, 'allDepartments']);
 Route::post('/storedepartment',[DepartmentController::class, 'storedepartment']);
 Route::post('/deletedepartment/{id}',[DepartmentController::class, 'deleteDepartment']);
 Route::post('/updatedepartment/{id}',[DepartmentController::class, 'updateDepartment']);


 Route::get('/getdesignations',[DesignationController::class, 'allDesignations']);
 Route::post('/storedesignation',[DesignationController::class, 'storedesignation']);