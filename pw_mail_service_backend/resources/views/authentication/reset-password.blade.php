@extends('authentication.layout', ['title' => 'Choose a new password'])

@section('content')
    <h1>Choose a new password</h1>
    <p>Set a new password for your account.</p>

    @if ($errors->any()) <div class="errors" role="alert"><ul>@foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div> @endif

    <form method="POST" action="{{ route('password.update') }}">
        @csrf
        <input type="hidden" name="token" value="{{ $request->route('token') }}">
        <label for="email">Email address
            <input id="email" type="email" name="email" value="{{ old('email', $request->email) }}" autocomplete="email" required autofocus>
        </label>
        <label for="password">New password
            <input id="password" type="password" name="password" autocomplete="new-password" required>
        </label>
        <label for="password_confirmation">Confirm new password
            <input id="password_confirmation" type="password" name="password_confirmation" autocomplete="new-password" required>
        </label>
        <button type="submit">Reset password</button>
    </form>
@endsection
