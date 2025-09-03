<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{

  public function index() {
    $news = News::latest()->get();
    return inertia::render('News/index', [
      'news' => $news
    ]);
  }

}
