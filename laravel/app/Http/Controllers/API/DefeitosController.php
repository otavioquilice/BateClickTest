<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Defeito;

class DefeitosController extends Controller
{
    public function index(Request $request)
    {

        $defeitos = Defeito::all();
        $data = [];
        foreach($defeitos as $defeito){
            $data[] = [
                'id'        => $defeito->id,
                'carro'     => '',//$defeito->carro->modelo.'/'.$defeito->carro->ano.'/'.$defeito->carro->fabricante,
                'defeito'   => $defeito->defeito,
            ];
        }
        return response($data, 200);
    }
    
    public function store(Request $request)
    {

        $request->validate(
            [
                "id_carro"                      => 'required',
                "defeito"                       => 'required',
            ],
            [
                'id_carro.required'                 => "O campo carro é obrigatório",
                'defeito.required'                => "O campo Defeito é obrigatório",
            ]
        );

        $data       = $request->all();

        $defeito    = Defeito::create($data);

        return response($defeito->with('carro'), 200);

    }
    
    public function update(Request $request){


        $defeito    = Defeito::findOrFail($request->id_carro);
        $data       = $request->all();
        $defeito->update($data);

        return response($defeito, 200);

    }

    public function destroy($id){

        if(Defeito::destroy($id))
		{
            Defeito::destroy($id);
			return response()->json(["status" => true], 200);
		
        }else{

            return response()->json(["status" => true], 400);
        }

    }
}
