

const Help = () => { 
    return  `
        *prefix:* ?
        *Commands:*

        help: show this list
        addgroup <type>: add a group to my db
        
        sbyt <type>: search groups by type
        
            *_type: vendas (default), dev, eletrica, filme, meu

        groupid> get group ID
    `
}
const ITMessage = () => {
    return `
        Alves Informática
    
        A sua solução em tecnologia! 🚀
        
        Oferecemos serviços de qualidade em:
        
        🖥️💻 Manutenção de computadores e notebooks
        - Formatação, atualização e instalação de softwares
        - Recuperação de arquivos perdidos ou deletados
        - Troca de pasta térmica e limpeza interna
        - Reparo de fontes e circuitos elétricos
        - Configuração de impressoras e redes
        
        🕹️💽 Manutenção de video games
        - Instalação do OPL para rodar jogos de PS2 via pen drive
        - Troca de pasta térmica e limpeza interna
        - Reparo de circuitos eletrônicos
        - Instalação e atualização do Recalbox para jogar clássicos retrô
        - Montagem e configuração de Raspberry Pi
        
        📱📱 Manutenção de celulares
        - Troca de tela e aplicação de película
        - Reparo de botões, alto-falantes e microfones
        - Limpeza de conector de carga e entrada de fone
        - Desbloqueio e restauração de sistema
        
        🌐🌐 Desenvolvimento de sites para pequenas empresas
        - Criação de sites responsivos, modernos e otimizados para o Google
        - Hospedagem, domínio e suporte técnico inclusos a combinar
        
        
        Entre em contato pelo chat ou pelo WhatsApp e faça seu orçamento sem compromisso. Aceitamos PIX 📲
        
        https://alves-informatica.com/
        Alves Informática - A sua solução em tecnologia! 🚀
        
    `
}

const ITEnterprise = () => {
    return (`
        *Alves Informática: Seu Parceiro Estratégico em TI.*

        Pra empresas, tempo é dinheiro e tecnologia é essencial. A Alves Informática oferece soluções completas e personalizadas pra garantir a eficiência e segurança da sua operação.

        *Nossos Serviços:*
        *   *Suporte Técnico Proativo e Reativo:* Manutenção preventiva, correção de falhas e suporte on-demand pra computadores, notebooks e servidores.
        *   *Gestão de Infraestrutura de Rede:* Configuração, otimização e segurança de redes, garantindo conectividade e performance.
        *   *Segurança de Dados e Sistemas:* Implementação de rotinas de backup, recuperação de dados e proteção contra ameaças.
        *   *Manutenção de Equipamentos:* Limpeza, atualização de hardware e software, prolongando a vida útil dos seus ativos.
        *   *Desenvolvimento Web Corporativo:* Criação de sites responsivos e otimizados, fortalecendo sua presença digital e gerando negócios.

        A gente foca em parceria, entende? Em oferecer um suporte que previna problemas e mantenha sua empresa sempre produtiva.
        Oferecemos planos mensais para prevenção e manutençaõ

        Entre em contato e vamos conversar sobre as necessidades específicas da sua empresa. Aceitamos PIX.
    `)
}

const booksTelegram = () =>{
    return (`
        Canal de livros voltados pra Ti no telegram:
        https://t.me/+4-z5C6E9tz4xMGRh 
    `)
}
const sendTexts = {
    "ITMessage": ITMessage,
    "booksTelegram": booksTelegram,
    "ITEnterprise": ITEnterprise
}
module.exports = { Help, ITMessage, booksTelegram, sendTexts, ITEnterprise }