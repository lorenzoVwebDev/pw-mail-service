@extends('authentication.layout', ['title' => 'Verify your email'])

@section('content')
    <h1>Verify your email</h1>
    <p>Before continuing, please verify your email address using the link we sent you.</p>

    @if (session('status') === 'verification-link-sent')
        <div class="message" role="status">A new verification link has been sent to the email address you provided.</div>
    @endif

    @if ($errors->any())
        <div class="errors" role="alert">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form method="POST" action="{{ route('verification.send') }}">
        @csrf
        <button type="submit">Resend verification email</button>
    </form>

    <nav class="links">
        <a href="{{ route('logout') }}"
           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Sign out</a>
    </nav>

    <form id="logout-form" method="POST" action="{{ route('logout') }}" hidden>
        @csrf
    </form>
@endsection
