const RESOURCES = [
    {
        "@id": "http://www.w3.org/2006/time#GeneralDateTimeDescription",
        "n:score": "3.7635238^^http://www.w3.org/2001/XMLSchema#float",
        "n:graph": "urn:x-arq:DefaultGraphNode",
        "n:values": [
            {
                "@id": "Generalized date-time description@en",
                "n:attribute": {
                    "@id": "http://www.w3.org/2000/01/rdf-schema#label",
                }
            }
        ]
    },
    // {"@id": "http://dbpedia.org/resource/Ruby_(programming_language)"},
    // {id: "http://dbpedia.org/resource/PHP"},
    // {id: "http://dbpedia.org/resource/JavaScript"}
    ];
const AUTOSUGGEST_KEYWORDS = ['time', 'before', 'after'];
const DATA = {
    RESOURCES,
    AUTOSUGGEST_KEYWORDS
}

export default DATA;