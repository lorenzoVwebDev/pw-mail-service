@extends('authentication.layout', ['title' => 'Confirm your password'])

@section('content')
    <h1>Confirm your password</h1>
    <p>For your security, please confirm your password before continuing.</p>

    @if ($errors->any()) <div class="errors" role="alert"><ul>@foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div> @endif

    <form method="POST" action="{{ route('password.confirm.store') }}">
        @csrf
        <label for="password">Password
            <input id="password" type="password" name="password" autocomplete="current-password" required autofocus>
        </label>
        <button type="submit">Confirm password</button>
    </form>
@endsection
