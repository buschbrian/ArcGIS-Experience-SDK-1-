/*! For license information please see errors.t9n.pt-PT-7f5151ee-171e5e7f-baad9a94.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const o="Ocorreu um erro ao carregar o gráfico.",a="Existe um total de ${ elementCount } barras neste gráfico. Os gráficos de barras com uma série são limitados a ${ totalLimit } barras. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",i="Os gráficos de barras com duas séries são limitados a ${ totalLimit } barras ou ${ seriesLimit } barras por séries. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",s="Os gráficos de barras com três ou mais séries são limitados a ${ totalLimit } barras ou ${ seriesLimit } barras por séries. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",t="Os gráficos de barras estão limitados a ${ seriesLimit } séries. Escolha um campo de divisão com menos valores únicos",r="Ocorreu um erro ao criar o gráfico.",n="Não é possível aplicar uma transformação de registo a valores negativos ou de zero.",m="Não é possível aplicar uma transformação de raiz quadrada a valores negativos.",d="Ocorreu um erro ao carregar a camada. URL = ${ url }. ID do item do portal = ${ portalItemId }.",u="${ dataPath } tem de ser único. A série com o nome ${ seriesName } tem um ID (${ seriesID }) que já está a ser usado por outra série.",c="${ dataPath } não pode realizar agregação sem contagem num campo não numérico.",l="${ dataPath } tem uma propriedade com o nome ${ missingProperty } em falta.",p="${ dataPath } não pode ser inferior a ${ limit } caracteres.",C="${ dataPath } não pode conter menos do que ${ limit } itens.",g="${ dataPath } não pode conter mais do que ${ limit } itens.",L="${ dataPath } tem de ter, pelo menos, um caráter que não seja um espaço em branco.",x="${ dataPath } não pode conter ${ additionalProperty }.",f="${ dataPath } tem de ser igual a um destes valores permitidos: ${ allowedValues }.",$="${ dataPath } tem de corresponder ao esquema de um dos seguintes: ${ schemaOptions }.",v="Os gráficos de dispersão com símbolos proporcionais não são suportados. Foi aplicado o tamanho de símbolo predefinido.",S="Falha ao ler os dados de entrada.",E="Os histogramas requerem pelo menos dois valores numéricos.",h="O tipo de série esperado no índice ${ seriesIndex } é '${ expectedType }', mas '${ receivedType }' foi recebido em vez disso",q="Certifique-se de que a soma total do(s) campo(s) numérico(s) escolhido(s) devolve todos os valores positivos ou todos os valores negativos.",O="Existe um total de ${ sliceCount } secções neste gráfico. Os gráficos circulares têm um limite de ${ totalLimit } secções. Selecione um campo Categoria com menos valores únicos, adicione menos campos numéricos ou aplique um filtro aos seus dados.",b="Os medidores baseados em elementos são limitados a ${ totalLimit } elementos. Filtre os seus dados.",P="Existe um total de ${ elementCount } marcadores neste gráfico. Os gráficos de linhas com uma série estão limitados a ${ totalLimit } marcadores. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",y="Os gráficos de linhas com duas séries estão limitados a ${ totalLimit } marcadores ou a ${ seriesLimit } marcadores por séries. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",I="Os gráficos de linhas com três ou mais séries estão limitados a ${ totalLimit } marcadores ou a ${ seriesLimit } marcadores por séries. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",B="Os gráficos de linhas estão limitados a ${ seriesLimit } séries. Escolha um campo de divisão com menos valores únicos",F="Existe um total de ${ elementCount } caixas neste gráfico. Os gráficos de caixas com uma série estão limitados a ${ totalLimit } caixas. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",V="Os gráficos de caixas com duas ou mais séries estão limitados a ${ totalLimit } caixas ou ${ seriesLimit } caixas por série. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",w="Os gráficos de caixas com três ou mais séries estão limitados a ${ totalLimit } caixas ou ${ seriesLimit } caixas por série. Selecione um campo Categoria com menos valores únicos ou aplique um filtro aos seus dados.",D="Os gráficos de caixas estão limitados a ${ seriesLimit } séries. Escolha um campo de divisão com menos valores únicos",T="Os gráficos de caixas só podem apresentar até ${ totalLimit } pontos de valores atípicos. Filtre os seus dados.";var N={defaultError:o,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:s,barSeriesCountCannotExceedLimit:t,defaultInvalidChart:r,negativeValueInDataForLogTransformation:n,negativeValueInDataForSqrtTransformation:m,layerLoadFailure:d,duplicateSeriesID:u,nonNumericAggregation:c,requiredProperty:l,minLength:p,minItems:C,maxItems:g,whiteSpacePattern:L,additionalProperty:x,enumValues:f,anyOfValues:$,bubbleChartValidateMsg:v,queryError:S,histogramEmptyField:E,invalidSeriesType:h,or:"ou",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:q,pieChartSlicesCannotExceedLimit:O,gaugeCannotExceedLimit:b,uniqueSeriesLineCountCannotExceedLimit:P,twoSeriesLineCountCannotExceedLimit:y,threePlusSeriesLineCountCannotExceedLimit:I,lineSeriesCountCannotExceedLimit:B,uniqueSeriesBoxCountCannotExceedLimit:F,twoSeriesBoxCountCannotExceedLimit:V,threePlusBoxLineCountCannotExceedLimit:w,boxSeriesCountCannotExceedLimit:D,boxSeriesOutlierCannotExceedLimit:T};e.additionalProperty=x,e.anyOfValues=$,e.barSeriesCountCannotExceedLimit=t,e.boxSeriesCountCannotExceedLimit=D,e.boxSeriesOutlierCannotExceedLimit=T,e.bubbleChartValidateMsg=v,e.default=N,e.defaultError=o,e.defaultInvalidChart=r,e.duplicateSeriesID=u,e.enumValues=f,e.gaugeCannotExceedLimit=b,e.histogramEmptyField=E,e.invalidSeriesType=h,e.layerLoadFailure=d,e.lineSeriesCountCannotExceedLimit=B,e.maxItems=g,e.minItems=C,e.minLength=p,e.negativeValueInDataForLogTransformation=n,e.negativeValueInDataForSqrtTransformation=m,e.nonNumericAggregation=c,e.or="ou",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=q,e.pieChartSlicesCannotExceedLimit=O,e.queryError=S,e.requiredProperty=l,e.threePlusBoxLineCountCannotExceedLimit=w,e.threePlusSeriesBarCountCannotExceedLimit=s,e.threePlusSeriesLineCountCannotExceedLimit=I,e.twoSeriesBarCountCannotExceedLimit=i,e.twoSeriesBoxCountCannotExceedLimit=V,e.twoSeriesLineCountCannotExceedLimit=y,e.uniqueSeriesBarCountCannotExceedLimit=a,e.uniqueSeriesBoxCountCannotExceedLimit=F,e.uniqueSeriesLineCountCannotExceedLimit=P,e.whiteSpacePattern=L}));