<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Carro extends Model
{
    use HasFactory;
	use SoftDeletes;
    use Uuid;

    protected $table = "carros";
	protected $fillable = [

		"uuid",
		"id",
		"ano",
		"modelo",
		"fabricante"
	];

    public function defeitos()
	{
        return $this->hasMany(Defeitos::class, "id_carro", "id");
	}
}
