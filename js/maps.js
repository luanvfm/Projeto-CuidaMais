let map;

const RECIFE_COORDS = { lat: -8.063182, lng: -34.871139 };

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: RECIFE_COORDS,
        mapTypeControl: false,
        styles: [
            {
                featureType: "poi",
                stylers: [{ visibility: "off" }]
            }
        ]
    });

    loadGymsFromCSV();
}

function loadGymsFromCSV() {
    
    const csvFile = "data/academia-recife.csv";
    
    Papa.parse(csvFile, {
        download: true,
        header: true,
        delimiter: ";", 
        complete: function(results) {
            const gymsData = results.data.filter(item => 
                item.latitude && item.longitude && 
                !isNaN(item.latitude) && !isNaN(item.longitude)
            );
            
            if (gymsData.length === 0) {
                showError("Nenhuma academia encontrada no arquivo");
                return;
            }

            const bounds = new google.maps.LatLngBounds();
            const infoWindow = new google.maps.InfoWindow();
            
            gymsData.forEach(gym => {
                const position = {
                    lat: parseFloat(gym.latitude.replace(",", ".")),
                    lng: parseFloat(gym.longitude.replace(",", "."))
                };
                
                const marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: gym.polo || "Academia",
                    icon: {
                        url: "assets/pinacad.svg", // Caminho relativo
                        scaledSize: new google.maps.Size(40, 40) // Ajuste o tamanho
                    }
                });
                
                // Conteúdo do popup
                const contentString = `
                    <div class="map-popup">
                        <h3>${gym.polo || 'Academia'}</h3>
                        <p><strong>Endereço:</strong> ${gym.logradouro}, ${gym.bairro}</p>
                        ${gym.observacao ? `<p><strong>Observação:</strong> ${gym.observacao}</p>` : ''}
                        ${gym.datainauguracao ? `<p><strong>Inauguração:</strong> ${gym.datainauguracao}</p>` : ''}
                    </div>
                `;
                
                // Evento de clique no marcador
                marker.addListener("click", () => {
                    infoWindow.setContent(contentString);
                    infoWindow.open(map, marker);
                });
                
                bounds.extend(position);
            });
            
            map.fitBounds(bounds);
        },
        error: function(error) {
            console.error("Erro ao processar CSV:", error);
            showError("Erro ao carregar dados das academias");
        }
    });
}

function showError(message) {
    const mapDiv = document.getElementById("map");
    mapDiv.innerHTML = `
        <div class="map-error">
            <p>${message}</p>
            <p>Verifique o console para detalhes</p>
        </div>
    `;
}

// Inicialização segura
window.initMap = initMap;
document.addEventListener('DOMContentLoaded', function() {
    if (typeof google !== 'undefined') {
        initMap();
    } else {
        showError("API do Google Maps não carregou");
    }
});