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

                "modelo"           => 'required',
                "ano"              => 'required',
                "fabricante"       => 'required',
                "preco"            => 'required',
            ],
            [
                'modelo.required'        => "O campo Modelo é obrigatório",
                'ano.required'           => "O campo Ano é obrigatório",
                'fabricante.required'    => "O campo Fabricante é obrigatório",
                'preco.required'         => "O campo Preço é obrigatório",
            ]
        );

        $data       = $request->all();
        $verifyCarro = Carro::where('modelo', $request->modelo)->where('ano', $request->ano)->where('fabricante', $request->fabricante)->get();
        if(!empty($verifyCarro) && count($verifyCarro)){
            return response($content = 'Carro já cadstrado!', $status = 401);
        }

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
            $carros = Carro::all();

            return response($carros, 200);
		
        }else{

            return response()->json(["status" => false], 400);
        }

    }
}
