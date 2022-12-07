export function Headerz() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid ">
                <a class="navbar-brand" href="#">My<span class="text-danger">Book</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Contact</a>
                        </li>
                    </ul>
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                                <button class="btn btn-outline-success" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

