<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Defeito extends Model
{
    use HasFactory;
	use SoftDeletes;
    use Uuid;

    protected $table = "defeitos";
	protected $fillable = [
        
    	"uuid",
		"id",
        "id_carro",
		"defeito",
	];

    public function carro()
	{
        return $this->belongsTo(Carro::class, "id_carro", "id");
	}
}
