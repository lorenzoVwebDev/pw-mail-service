@extends('authentication.layout', ['title' => 'Two factor verification'])

@section('content')
    <h1>Two factor verification</h1>
    <p>Enter an authentication code, or use one of your recovery codes.</p>

    @if ($errors->any()) <div class="errors" role="alert"><ul>@foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div> @endif

    <form method="POST" action="{{ route('two-factor.login.store') }}">
        @csrf
        <label for="code">Authentication code
            <input id="code" type="text" name="code" inputmode="numeric" autocomplete="one-time-code" autofocus>
        </label>
        <label for="recovery_code">Recovery code
            <input id="recovery_code" type="text" name="recovery_code" autocomplete="off">
        </label>
        <label class="check"><input type="checkbox" name="remember" value="1"> Remember this device</label>
        <button type="submit">Verify and sign in</button>
    </form>
@endsection
