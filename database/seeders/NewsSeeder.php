<?php

namespace Database\Seeders;

use Illuminate\Database\Attributes\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB as FacadesDB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * @return void
     */
    public function run(): void
    {
        for($i=0; $i<10;$i++){
        FacadesDB::table('news')->insert([
            'judul' => fake()->title(),
            'deskripsi' => fake()->paragraph(),
            'kategori' => fake()->sentence(),
            'author' => fake()->email(),
        ]);
        }
    }
}
