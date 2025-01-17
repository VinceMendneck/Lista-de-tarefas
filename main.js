$(document).ready(function() {
    // Exibe o formulário ao clicar no botão "Nova tarefa +"
    $('header button').click(function() {
        $('form').slideDown();
    });

    // Oculta o formulário ao clicar no botão "Cancelar"
    $('#cancel-btn').click(function() {
        $('form').slideUp();
    });

    // Adiciona a nova tarefa na lista ao enviar o formulário
    $('form').on('submit', function(e) {
        e.preventDefault(); // Impede o envio do formulário

        const novaTarefa = $('#tarefa-nova').val(); // Obtém o texto da nova tarefa

        if (novaTarefa.trim() !== "") {
            // Cria um novo item de lista
            const novoItem = $('<li style="display: none;"></li>');

            // Insere o texto da nova tarefa no item
            novoItem.text(novaTarefa);

            // Adiciona a animação de linha no item ao ser clicado
            novoItem.click(function() {
                $(this).css('text-decoration', 'line-through'); // Marca o item com o risco
            });

            // Adiciona o item à lista
            $('#lista-tarefas').append(novoItem);

            // Exibe o item com animação fade-in
            novoItem.fadeIn();

            // Limpa o campo de entrada de nova tarefa
            $('#tarefa-nova').val('');

            // Verifica se há tarefas na lista e mostra o botão de limpar, se houver
            verificarTarefas();
        }
    });

    // Limpar todas as tarefas ao clicar no botão "Limpar todas as tarefas"
    $('#limpar-tarefas').click(function() {
        // Remove todos os itens da lista
        $('#lista-tarefas').empty();

        // Verifica novamente se há tarefas e esconde o botão se não houver
        verificarTarefas();
    });

    // Função para verificar o número de tarefas e mostrar/esconder o botão
    function verificarTarefas() {
        if ($('#lista-tarefas li').length > 0) {
            // Se houver tarefas, exibe o botão "Limpar todas as tarefas" com fadeIn
            $('#limpar-tarefas').fadeIn();

            // Adiciona a classe "com-tarefas" para exibir o border-bottom
            $('ul').addClass('com-tarefas');
        } else {
            // Se não houver tarefas, esconde o botão
            $('#limpar-tarefas').fadeOut();

            // Remove a classe "com-tarefas" para esconder o border-bottom
            $('ul').removeClass('com-tarefas');
        }
    }
});
