@extends('authentication.layout', ['title' => 'Reset your password'])

@section('content')
    <h1>Forgot your password?</h1>
    <p>Enter your email address and we’ll send you a password reset link.</p>

    @if (session('status')) <div class="message" role="status">{{ session('status') }}</div> @endif
    @if ($errors->any()) <div class="errors" role="alert"><ul>@foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div> @endif

    <form method="POST" action="{{ route('password.email') }}">
        @csrf
        <label for="email">Email address
            <input id="email" type="email" name="email" value="{{ old('email') }}" autocomplete="email" required autofocus>
        </label>
        <button type="submit">Send reset link</button>
    </form>
    <nav class="links"><a href="{{ route('login') }}">Back to sign in</a></nav>
@endsection
