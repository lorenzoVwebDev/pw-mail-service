@extends('authentication.layout', ['title' => 'Create account'])

@section('content')
    <h1>Create account</h1>
    <p>Fill in your details to get started.</p>

    @if ($errors->any()) <div class="errors" role="alert"><ul>@foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div> @endif

    <form method="POST" action="{{ route('register.store') }}">
        @csrf
        <label for="name">Name
            <input id="name" type="text" name="name" value="{{ old('name') }}" autocomplete="name" required autofocus>
        </label>
        <label for="email">Email address
            <input id="email" type="email" name="email" value="{{ old('email') }}" autocomplete="email" required>
        </label>
        <label for="password">Password
            <input id="password" type="password" name="password" autocomplete="new-password" required>
        </label>
        <label for="password_confirmation">Confirm password
            <input id="password_confirmation" type="password" name="password_confirmation" autocomplete="new-password" required>
        </label>
        <button type="submit">Create account</button>
    </form>
    <nav class="links"><a href="{{ route('login') }}">Already have an account? Sign in</a></nav>
@endsection
