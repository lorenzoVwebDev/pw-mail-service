<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? 'Authentication' }} · {{ config('app.name') }}</title>
    <style>
        :root { color-scheme: light; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #172033; background: #f4f6fb; }
        * { box-sizing: border-box; }
        body { min-height: 100vh; margin: 0; display: grid; place-items: center; padding: 24px; }
        main { width: min(100%, 440px); padding: 36px; background: #fff; border: 1px solid #e5e9f2; border-radius: 16px; box-shadow: 0 18px 50px rgb(25 38 70 / 8%); }
        h1 { margin: 0 0 8px; font-size: 1.7rem; letter-spacing: -.03em; }
        p { color: #657089; line-height: 1.55; }
        form { display: grid; gap: 16px; margin-top: 24px; }
        label { display: grid; gap: 7px; font-size: .92rem; font-weight: 600; }
        input { width: 100%; padding: 11px 12px; border: 1px solid #cfd6e3; border-radius: 8px; font: inherit; }
        input:focus { outline: 3px solid rgb(70 103 220 / 18%); border-color: #4667dc; }
        button { padding: 12px 16px; border: 0; border-radius: 8px; color: white; background: #3657cc; font: inherit; font-weight: 700; cursor: pointer; }
        button:hover { background: #2948b5; }
        a { color: #3657cc; }
        .links { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 20px; font-size: .92rem; }
        .message { padding: 11px 13px; border-radius: 8px; background: #eef3ff; color: #2747a5; }
        .errors { padding: 11px 13px; border-radius: 8px; background: #fff0f0; color: #a62929; }
        .errors ul { margin: 0; padding-left: 20px; }
        .check { display: flex; align-items: center; gap: 9px; font-weight: 400; }
        .check input { width: auto; }
    </style>
</head>
<body>
    <main>
        @yield('content')
    </main>
</body>
</html>
