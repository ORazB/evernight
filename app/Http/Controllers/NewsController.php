<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{

    public function index()
    {
        $news = News::latest()->get();
        return Inertia::render('News/Index', [
            'news' => $news
        ]);
    }

    public function create()
    {
        return Inertia::render('News/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'kategori' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'author' => 'required|string',
        ]);
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('images', 'public');
        }
        
        News::create($validated);
        return redirect()->route('news.index')->with('success', 'News created!');
    }


    public function edit(News $news)
    {
        return Inertia::render('News/Edit', [
            'news' => $news
        ]);
    }

    public function update(Request $request, News $news)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'author' => 'required|string|max:255',
        ]);

        $news->update($request->all());

        return redirect()->route('news.index')->with('success', 'News updated successfully');
    }

    public function destroy(News $news)
    {
        $news->delete();

        return redirect()->route('news.index')->with('success', 'News deleted successfully');
    }
}

