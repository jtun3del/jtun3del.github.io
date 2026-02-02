<!DOCTYPE html>
<html lang="en">
<!-- bootstrap css -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<!-- bootstrap js-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
<!-- google font -->
<link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
<!-- client css -->
<link rel="stylesheet" href="client.css" />
<!-- bootstrap icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<!-- client js -->
<script src="discount.js"></script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<!-- favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">

<body>

    <nav class="navbar navbar-expand-md bg-primary-subtle">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><i class="bi bi-compass"></i> Northwind</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Products <i class="bi bi-bag"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Browse Categories <i
                                        class="bi bi-list-columns-reverse"></i></a></li>
                            <li><a class="dropdown-item" href="#">Product Search <i class="bi bi-shop"></i></a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Current Discounts <i class="bi bi-percent"></i></a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Customers <i class="bi bi-basket"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Register <i class="bi bi-person-arms-up"></i></i></a>
                            </li>

                            <li><a class="dropdown-item" href="#">Sign In <i class="bi bi-person-circle"></i></a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-none d-md-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-primary" type="submit"><i class="bi bi-search"></i><span
                            class="visually-hidden">Search</span></button>
                </form>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="p-4 m-2 rounded-3 border border-secondary-subtle">
            <p class="fs-4">Hello World! </p>
            <hr class="fs-4">
            <p class="" fs-2> Buy my Products</p>
        </div>
        <div class="row p-2 m-2" id="discount-row">
            <div class="col px-2 py-4">
                <h3>Tis the seasoning</h3>
                <div class="mb-4">
                    Order today! Save 12.5% on Chef Anton's Italian Seasoning.
                    You don't want to make Chef Anton mad, do you?
                </div>
                <i>Discount expires: 2/25/2025</i><br />
                <i class="bi bi-receipt"></i>  <a href="#" class="discount"  data-product="Chef Anton's Italian Seasoning"
                data-title="Save 15% Off" data-code="3242424">Discount Code</a>
            </div>
            <div class="col px-2 py-4">
                <h3>free pizza</h3>
                <div class="mb-4">
                    pizza for free
                </div>
                <i>Discount expires: 2/25/2025</i><br />
                <i class="bi bi-receipt"></i>  <a href="#" class="discount"  data-product="free pizza"
                data-title="Save 100%" data-code="74646">Discount Code</a>
            </div>
            <div class="col px-2 py-4">
                <h3>half off on breadsticks</h3>
                <div class="mb-4">
                    half off on bread stick
                </div>
                <i>Discount expires: 2/25/2025</i><br />
                <i class="bi bi-receipt"></i>  <a href="#" class="discount"  data-product="breadstick"
                data-title="Save 50%" data-code="53212">Discount Code</a>
            </div>
        </div>
    </div>

    <!-- toast -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
            <div class="toast-header">
                <strong class="me-auto" id="product">Product</strong>
                <small class="text-body-secondary" id="title">discount title</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body" id= "code">
                Discount Code: 1234
            </div>
        </div>
    </div>
</body>

</html>
=======
# jtun3del.github.io