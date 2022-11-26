<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function allDepartments()
    {
        $departments = Department::all();

        return $departments;
    }

    public function storedepartment(Request $request)
    {

        try{

            $result = Department::insert([
                'department_code' => rand(1000,5000),
                'name' => $request->input('name'),
                'short_name' => $request->input('short_name'),
                'description' => $request->input('description'),
                'user_id' => $request->input('user_id'),

             ]);

            return response([
                'message' => "Successfully Added"
            ],200); // States Code

        }
        catch(Exception $exception){
            return response([
                'message' => $exception->getMessage()
            ],400);
        }

    }

    public function deleteDepartment(Request $request)
    {
        $id = $request->id;

        Department::where('id',$id)->delete();

        return response([
            'message' => "Successfully Deleted"
        ],200); // States Code

    }

    public function updateDepartment(Request $request)
    {
        try{

        $id = $request->id;

        $name = $request->input('name');
        $short_name = $request->input('short_name');
        $description = $request->input('description');
        $user_id = $request->input('user_id');

        $result = Department::where('id', $id)->update([

            'name' => $name,
            'short_name' => $short_name,
            'description' => $description,
            'user_id' => $user_id,
        ]);

        return response([
            'message' => "Successfully Edited"
        ],200); // States Code

        }
        catch(Exception $exception){
            return response([
                'message' => $exception->getMessage()
            ],400);
        }


    }
}
