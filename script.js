$(document).ready(function() {
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('#botao-adicionar').click(function() {
        $('#lista-tarefas').append('<li>' + $('#input-tarefa').val() + '</li>');
        $('#input-tarefa').val('');
    });

    $('#form-tarefas').submit(function(e) {
        e.preventDefault();
        $('#botao-adicionar').click();
    });
});