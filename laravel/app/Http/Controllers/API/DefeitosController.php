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

                'id_carro'  => $defeito->id_carro,
                'id'        => $defeito->id,
                'defeito'   => $defeito->defeito,
                'modelo'    => $defeito->carro->modelo,//!empty($defeito->carro->modelo) ? :'Carro excluido',
                'ano'       => $defeito->carro->ano,//!empty($defeito->carro->ano) ? :'Carro excluido',
                'fabricante'=> $defeito->carro->fabricante,//!empty($defeito->carro->fabricante) ? :'Carro excluido'
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

        $data_imput       = $request->all();
        $defeito    = Defeito::create($data_imput);

        $data = [];
        if(!empty($defeito) && $defeito->count()){
            $data = [

                'id_carro'  => $defeito->id_carro,
                'id'        => $defeito->id,
                'defeito'   => $defeito->defeito,
                'modelo'    => $defeito->carro->modelo,
                'ano'       => $defeito->carro->ano,
                'fabricante'=> $defeito->carro->fabricante
            ];
        }

        return response($data, 200);


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
            
            $defeitos = Defeito::all();
            $data = [];
            foreach($defeitos as $defeito){

                $data[] = [

                    'id_carro'  => $defeito->id_carro,
                    'id'        => $defeito->id,
                    'defeito'   => $defeito->defeito,
                    'modelo'    => $defeito->carro->modelo,//!empty($defeito->carro->modelo) ? :'Carro excluido',
                    'ano'       => $defeito->carro->ano,//!empty($defeito->carro->ano) ? :'Carro excluido',
                    'fabricante'=> $defeito->carro->fabricante,//!empty($defeito->carro->fabricante) ? :'Carro excluido'
                ];
                
            }

            return response($data, 200);
		
        }else{

            return response()->json(["status" => true], 400);
        }

    }
}
