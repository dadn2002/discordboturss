# discord bot urss

**Introdução:**

Bem vindos contribuidores e programadores, esse é o github do servidor da UFRN Secret Society!! Se você está aqui acredito que foi convidado por um CEO ou passou pelo teste de StaffApply. Quanto a ideia do servidor em si é servir de suporte a nossa vida acadêmica na UFRN (o servidor não tem nenhum vínculo legal com a instituição), cobrindo desde monitorias até os editais e notícias do portal. 
Quanto as metas, objetivos e mudanças necessárias, vejam o Discord no canal #Programadores, diariamente o bot postará lá as 12:00 um aviso das funções que precisamos e dos erros/melhoras necessárias. O Canal #admin é de acesso exclusivo dos CEO's, é onde nós realizamos comandos de console para os mais diversos motivos...
O Compilador efetivo do Pylon.bot é atualizado eventualmente por @nmdavialves, então o marquem como revisor que somente ele pode upar as modificações para nosso servidor! Como também peço que comuniquem suas mudanças no canal do seu cargo antes de tudo, é mais fácil um @everyone nos alertar que o dessa ferramenta.


**Pastas e subdivisões:**

main.ts é onde residem os comandos `!` .raw e os discord.on e as tasks.cron

admin.ts é onde as variáveis globais são declaradas e os comandos de admin residem, além da declaração de todos os subgrupos de comandos

asyncfunction.ts é onde residem as funções assincronas do bot

banca.ts é o conjunto de comandos `!banca` da categoria monitoria

mm.ts é o conjunto de comandos relacionados a esportes

(Nota: todos os comandos funcionam assincronamente)


**Bots e suas características:**

      Name       |symbol|         ID

@Groovy#7254     |  `-`  | 234395307759108106

@Twitchcord#3823 |  `>`   | 761322911772180500 

@YouTube#7763    |  `yt`  | 456633518882160642

@Zoe#7767        |  `>`   | 550737379460382752


**Cargos especiais e suas características:**
     
     Name     |         ID

CEO           | 833849304601853952

PROGRAMADORES | 837138017201291285

MODERS        | 832592990060544070

PROFESSOR     | 833521530180468816

MONITOR       | 832592734622580799

TECNICO       | 833870917260148746

PALESTRANTE   | 832669329203134465

PARCEIROS     | 835224071821328395

MARKETING     | 832598978503770112

UFNPC         | 832593966155300905

TEMPBAN       | 833546252514885704

VIEWER        | 833818556235645018

ESPORTISTA    | 833866589438607431

LIVEALERTS    | 834507786397941860

LOL           | 835697502279434250

CANDIDATO     | 835266459672248371

(Para obter o ID dos canais ative o modo desenvolvedor do seu discord)


**Documentação: https://pylon.bot/docs/reference/index.html**


**Limitações de software:**
  
  1.General
   
   1.2Event Limit - Unlimited events

  2.Per Event

   2.1CPU Time - 50ms per event

   2.2Total Time - 20s per event

   2.3Fetch - 25 requests per event

  3.KV Limits

   3.1Max keys per guild: 256 keys

   3.2Key Size: 256 bytes

   3.3Value Size: 8kb per key

  4.Task Limits

   4.1Max cron-based schedules: 5 schedules

   4.2Minimum time between an individual cron run: 5 minutes

   4.3Task execution limits: Same as per-event limits

  5.CPU Burst Limits

   5.1Minimum CPU Burst Request - 200ms (default: 1000ms)

   5.2Maximum CPU Burst Request - 5000ms per request

   5.3Total CPU Burst Quota - 10s of CPU time per 10 minutes

  6.Discord Limits

   6.1Pylon automatically respects Discord's built-in API rate limits, if a particular rate limit is exceeded, it will be cancelled.

  7.Other Limits

   7.1Concurrent Asynchronous Requests - 10 concurrent operations (soft-limit)

   7.2Script Size - 1mb per script bundle (after bundling/tree-shaking/minification)

   7.3 OBS: The runtime will allow for a limit of 10 concurrent requests to be active
   at any point in time (per script). Additional requests are not cancelled, they will
   just wait for an open slot to perform the operation.

  **Comportem-se, sigam as regras que nosso servidor irá crescer mais e mais <3**


