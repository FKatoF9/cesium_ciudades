async function init() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZGE2NTY2NS02Mjk3LTRmNjYtODIwNC0wYjFhMzhlYTljMDIiLCJpZCI6MzMxMzkxLCJpYXQiOjE3NTUzNTY1NDF9.PHu1o0KlsPwUmnsOjG1v8F3Xx-SisSnhTyUEbl_C1fU';

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    try {
        const ds = await Cesium.CzmlDataSource.load('ciudades_principales.czml');
        viewer.dataSources.add(ds);
        await viewer.zoomTo(ds);
    } catch (e) {
        console.error('Error cargando CZML:', e);
    }
}

init();