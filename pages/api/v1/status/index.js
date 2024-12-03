function status(request, response) {
  response.status(200).json({ chave: "o curso.dev é foda :D" });
}

export default status;
