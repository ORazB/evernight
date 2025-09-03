<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    
    public fuction index()
    {
        $news = News::latest()->get();
        return Inertia::render('News/Index', [
            'news' => $news
        ]);
    }

  public function index() {
    $news = News::latest()->get();
    return inertia::render('News/index', [
      'news' => $news
    ]);
  }

}
