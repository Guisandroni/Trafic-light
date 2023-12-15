var vermelho, amarelo, verde, off;
amarelo = document.getElementById("yellon");

vermelho = document.getElementById("red");

verde = document.getElementById("green");

function desliga() {
  if (
    amarelo.className == "light yellow-light" ||
    verde.className == "light green-light" ||
    vermelho.className == "light red-light"
  ) {
    amarelo.className = "light off-light";
    verde.className = "light off-light";
    vermelho.className = "light off-light";
  }
}

function red() {
  if (
    verde.className == "light off-light" &&
    amarelo.className == "light off-light" &&
    vermelho.className == "light off-light"
  );

  vermelho.className = "light red-light";
}

function yellon() {
  if (
    verde.className == "light off-light" &&
    amarelo.className == "light off-light" &&
    vermelho.className == "light off-light"
  );

  amarelo.className = "light yellow-light";
}

function green() {
  if (
    verde.className == "light off-light" &&
    amarelo.className == "light off-light" &&
    vermelho.className == "light off-light"
  );

  verde.className = "light green-light";
}

function liga() {
  if (
    vermelho.className == "light off-light" ||
    amarelo.className == "light off-light" ||
    verde.className == "light off-light"
  ) {
    verde.className = "light green-light ";
    vermelho.className = "light red-light";
    amarelo.className = "light yellow-light";
  }
}

function liga_desliga() {
  if (verde.className == "light green-light") {
    verde.className = "light off-light";
    amarelo.className = "light yellow-light";
  } else {
    if (amarelo.className == "light yellow-light") {
      amarelo.className = "light off-light";
      vermelho.className = "light red-light";
    } else {
      if (vermelho.className == "light red-light") {
        vermelho.className = "light off-light";
        verde.className = "light green-light";
      }
    }
  }
}
