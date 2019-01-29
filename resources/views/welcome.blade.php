<!DOCTYPE html>
<html>
<head>
    <title>Welcome in admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

     <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="authenticate" content="{{ auth()->check() }}">


    {{-- Begain admin assets  --}}
    
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
    {{-- End admin Assets --}}
</head>
<body class="sticky-header">
    <div id="App"></div>
    
    <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>

    {{-- begain admin assets --}}

   <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    


    {{-- End admin assets --}}
</body>
</html>