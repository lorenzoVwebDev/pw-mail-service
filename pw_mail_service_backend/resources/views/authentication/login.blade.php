@extends('authentication.layout', ['title' => 'Sign in'])

@section('content')
    <h1>Sign in</h1>
    <p>Enter your account details to continue.</p>

    @if (session('status')) <div class="message" role="status">{{ session('status') }}</div> @endif
    @if ($errors->any()) <div class="errors" role="alert"><ul>@foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div> @endif

    <form method="POST" action="{{ route('login.store') }}">
        @csrf
        <label for="email">Email address
            <input id="email" type="email" name="email" value="{{ old('email') }}" autocomplete="username" required autofocus>
        </label>
        <label for="password">Password
            <input id="password" type="password" name="password" autocomplete="current-password" required>
        </label>
        <label class="check"><input type="checkbox" name="remember" value="1" @checked(old('remember'))> Remember me</label>
        <button type="submit">Sign in</button>
    </form>
    <nav class="links"><a href="{{ route('password.request') }}">Forgot your password?</a><a href="{{ route('register') }}">Create an account</a></nav>
@endsection
