<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Carro;

class CarrosController extends Controller
{
    public function index(Request $request)
    {
        $carros = Carro::all();

        return response($carros, 200);
    }
    
    public function store(Request $request)
    {

        $request->validate(
            [
                "ano"              => 'required',
                "modelo"           => 'required',
                "fabricante"       => 'required',
            ],
            [
                'ano.required'           => "O campo carro é obrigatório",
                'modelo.required'        => "O campo Defeito é obrigatório",
                'fabricante.required'    => "O campo Defeito é obrigatório",
            ]
        );

        $data       = $request->all();

        $carro    = Carro::create($data);

        return response($carro, 200);

    }
    
    public function update(Request $request){

        $carro      = Carro::findOrFail($request->id_carro);
        $data       = $request->all();
        $carro->update($data);

        return response($carro, 200);

    }

    public function destroy($id){

        if(Carro::destroy($id))
		{
            Carro::destroy($id);
			return response()->json(["status" => true], 200);
		
        }else{

            return response()->json(["status" => true], 400);
        }

    }
}
