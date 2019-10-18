<template>
  <div id="home">
    <!-- 上列表 -->
    <div class='top'>
      <div class="box" style="background-color: rgb(238, 112, 109);">
        <div class="circle">
          <img style="width:30px;height:30px;margin-left:16px;margin-top:14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEzvUmDvUmDwUV/yUV/vUV/vUV/vUV/vUmAx1xwNAAAACHRSTlMAgH5LIefKopwUTsQAAALtSURBVHja7ZzNb9NAEMVDnA+OrYREjlVFpRzbIqiPuYByTAUSPlYQKh+LBMjHljRh/mxK6q09613Hid9GAr13amNrf96Z2Znd1pNOp6KurIW44BchhBBCSEjI+fFfHW1xYQfIeP3z7RYXNmmCgEzqGRe3CMjJizrGW4FARvK9joGCyIGPMRQcZHnqZvQSIETu3JCxICEy9xkLCVk6ArmXgiGyqELeCRoiR06vgyGVqQxEmmSiZhdyiNhhnIWAfHTeA4KM88FW+p6pgVwhIFGaj6aTS+52+YWpjMYwi+pCLBZQ6/L7Jh/PZa05qsabFVG2V2o5qv1GIn/s++KOyJoIAJIP+buyEouUBtgS5WtlYs9tgdx3DWynZPYHAEjv8YOZtUpK8Ratt23H1bG2uJBp60RqIaIUa88P7ZlBNNDm6XtqTDt1dXhN7WiDqKcfPbbXDUaP4XTT2VD32ykr1Q7z2z0aMipVQZMeZ2hIrJ49UfMKBBHlIZimytV7hBygIc9VsgoKuSOEEEII2RdEbdXODptrG4jzBNhEO0NGhBBCCCGtIawnhBBCCCGEEEIIIf8RhHthQggh5F+E7OUvd6wnhBBCCCGEEEIIIfuB8N+yhBBCCCGsJ4QQQgghLoh5KTnZH+QGDdHvcAd65V1Dgr68byCB2hDGathxiEYa8+wzNa8VGqJdHbTJxQRtP0gfwjPdnTmUEJ7va/tU+9xwEVx42tN32k6pFbNZgEatyPZBHMBelWgaCD7bZ7YLIhF0F1VUbcpN4K6fVh87FnAjoGlkLdcP4xTYqs9bclWq6hkIKMC6zuFMv7d8gBgrdXZ8P9mr7hsgGuvpAHjqdNSDvrSex4l44iguDpef2xWWs1R8YRSVjrDL62+HO+rldWESR63d5iDdUFe+QgbUauLbwQSdiPYKQu51/R7K8H1NCdT3803ZACB/euomMIfULGgU5bI2aUQ/EIyN6e+i9WQ+vWqQRM9/ft0Z9JD2XjtH/QP3EOMP5LBEagAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="font">
          <p>30</p>
          <h4>待审课件</h4>
        </div>
      </div>
      <div class="box" style="background-color: rgb(247, 218, 71);">
<div class="circle">
<img style="width:30px;height:30px;margin-left:16px;margin-top:14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEzvUmDvUmDwUV/yUV/vUV/vUV/vUV/vUmAx1xwNAAAACHRSTlMAgH5LIefKopwUTsQAAALtSURBVHja7ZzNb9NAEMVDnA+OrYREjlVFpRzbIqiPuYByTAUSPlYQKh+LBMjHljRh/mxK6q09613Hid9GAr13amNrf96Z2Znd1pNOp6KurIW44BchhBBCSEjI+fFfHW1xYQfIeP3z7RYXNmmCgEzqGRe3CMjJizrGW4FARvK9joGCyIGPMRQcZHnqZvQSIETu3JCxICEy9xkLCVk6ArmXgiGyqELeCRoiR06vgyGVqQxEmmSiZhdyiNhhnIWAfHTeA4KM88FW+p6pgVwhIFGaj6aTS+52+YWpjMYwi+pCLBZQ6/L7Jh/PZa05qsabFVG2V2o5qv1GIn/s++KOyJoIAJIP+buyEouUBtgS5WtlYs9tgdx3DWynZPYHAEjv8YOZtUpK8Ratt23H1bG2uJBp60RqIaIUa88P7ZlBNNDm6XtqTDt1dXhN7WiDqKcfPbbXDUaP4XTT2VD32ykr1Q7z2z0aMipVQZMeZ2hIrJ49UfMKBBHlIZimytV7hBygIc9VsgoKuSOEEEII2RdEbdXODptrG4jzBNhEO0NGhBBCCCGtIawnhBBCCCGEEEIIIf8RhHthQggh5F+E7OUvd6wnhBBCCCGEEEIIIfuB8N+yhBBCCCGsJ4QQQgghLoh5KTnZH+QGDdHvcAd65V1Dgr68byCB2hDGathxiEYa8+wzNa8VGqJdHbTJxQRtP0gfwjPdnTmUEJ7va/tU+9xwEVx42tN32k6pFbNZgEatyPZBHMBelWgaCD7bZ7YLIhF0F1VUbcpN4K6fVh87FnAjoGlkLdcP4xTYqs9bclWq6hkIKMC6zuFMv7d8gBgrdXZ8P9mr7hsgGuvpAHjqdNSDvrSex4l44iguDpef2xWWs1R8YRSVjrDL62+HO+rldWESR63d5iDdUFe+QgbUauLbwQSdiPYKQu51/R7K8H1NCdT3803ZACB/euomMIfULGgU5bI2aUQ/EIyN6e+i9WQ+vWqQRM9/ft0Z9JD2XjtH/QP3EOMP5LBEagAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="font">
          <p>30</p>
          <h4>待审课件</h4>
        </div>
      </div>
      <div class="box" style="background-color: rgb(88, 202, 154);">
<div class="circle">
<img style="width:30px;height:30px;margin-left:16px;margin-top:14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEzvUmDvUmDwUV/yUV/vUV/vUV/vUV/vUmAx1xwNAAAACHRSTlMAgH5LIefKopwUTsQAAALtSURBVHja7ZzNb9NAEMVDnA+OrYREjlVFpRzbIqiPuYByTAUSPlYQKh+LBMjHljRh/mxK6q09613Hid9GAr13amNrf96Z2Znd1pNOp6KurIW44BchhBBCSEjI+fFfHW1xYQfIeP3z7RYXNmmCgEzqGRe3CMjJizrGW4FARvK9joGCyIGPMRQcZHnqZvQSIETu3JCxICEy9xkLCVk6ArmXgiGyqELeCRoiR06vgyGVqQxEmmSiZhdyiNhhnIWAfHTeA4KM88FW+p6pgVwhIFGaj6aTS+52+YWpjMYwi+pCLBZQ6/L7Jh/PZa05qsabFVG2V2o5qv1GIn/s++KOyJoIAJIP+buyEouUBtgS5WtlYs9tgdx3DWynZPYHAEjv8YOZtUpK8Ratt23H1bG2uJBp60RqIaIUa88P7ZlBNNDm6XtqTDt1dXhN7WiDqKcfPbbXDUaP4XTT2VD32ykr1Q7z2z0aMipVQZMeZ2hIrJ49UfMKBBHlIZimytV7hBygIc9VsgoKuSOEEEII2RdEbdXODptrG4jzBNhEO0NGhBBCCCGtIawnhBBCCCGEEEIIIf8RhHthQggh5F+E7OUvd6wnhBBCCCGEEEIIIfuB8N+yhBBCCCGsJ4QQQgghLoh5KTnZH+QGDdHvcAd65V1Dgr68byCB2hDGathxiEYa8+wzNa8VGqJdHbTJxQRtP0gfwjPdnTmUEJ7va/tU+9xwEVx42tN32k6pFbNZgEatyPZBHMBelWgaCD7bZ7YLIhF0F1VUbcpN4K6fVh87FnAjoGlkLdcP4xTYqs9bclWq6hkIKMC6zuFMv7d8gBgrdXZ8P9mr7hsgGuvpAHjqdNSDvrSex4l44iguDpef2xWWs1R8YRSVjrDL62+HO+rldWESR63d5iDdUFe+QgbUauLbwQSdiPYKQu51/R7K8H1NCdT3803ZACB/euomMIfULGgU5bI2aUQ/EIyN6e+i9WQ+vWqQRM9/ft0Z9JD2XjtH/QP3EOMP5LBEagAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="font">
          <p>30</p>
          <h4>待审课件</h4>
        </div>
      </div>
      <div class="box" style="background-color: rgb(68, 126, 255);">
<div class="circle">
<img style="width:30px;height:30px;margin-left:16px;margin-top:14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEzvUmDvUmDwUV/yUV/vUV/vUV/vUV/vUmAx1xwNAAAACHRSTlMAgH5LIefKopwUTsQAAALtSURBVHja7ZzNb9NAEMVDnA+OrYREjlVFpRzbIqiPuYByTAUSPlYQKh+LBMjHljRh/mxK6q09613Hid9GAr13amNrf96Z2Znd1pNOp6KurIW44BchhBBCSEjI+fFfHW1xYQfIeP3z7RYXNmmCgEzqGRe3CMjJizrGW4FARvK9joGCyIGPMRQcZHnqZvQSIETu3JCxICEy9xkLCVk6ArmXgiGyqELeCRoiR06vgyGVqQxEmmSiZhdyiNhhnIWAfHTeA4KM88FW+p6pgVwhIFGaj6aTS+52+YWpjMYwi+pCLBZQ6/L7Jh/PZa05qsabFVG2V2o5qv1GIn/s++KOyJoIAJIP+buyEouUBtgS5WtlYs9tgdx3DWynZPYHAEjv8YOZtUpK8Ratt23H1bG2uJBp60RqIaIUa88P7ZlBNNDm6XtqTDt1dXhN7WiDqKcfPbbXDUaP4XTT2VD32ykr1Q7z2z0aMipVQZMeZ2hIrJ49UfMKBBHlIZimytV7hBygIc9VsgoKuSOEEEII2RdEbdXODptrG4jzBNhEO0NGhBBCCCGtIawnhBBCCCGEEEIIIf8RhHthQggh5F+E7OUvd6wnhBBCCCGEEEIIIfuB8N+yhBBCCCGsJ4QQQgghLoh5KTnZH+QGDdHvcAd65V1Dgr68byCB2hDGathxiEYa8+wzNa8VGqJdHbTJxQRtP0gfwjPdnTmUEJ7va/tU+9xwEVx42tN32k6pFbNZgEatyPZBHMBelWgaCD7bZ7YLIhF0F1VUbcpN4K6fVh87FnAjoGlkLdcP4xTYqs9bclWq6hkIKMC6zuFMv7d8gBgrdXZ8P9mr7hsgGuvpAHjqdNSDvrSex4l44iguDpef2xWWs1R8YRSVjrDL62+HO+rldWESR63d5iDdUFe+QgbUauLbwQSdiPYKQu51/R7K8H1NCdT3803ZACB/euomMIfULGgU5bI2aUQ/EIyN6e+i9WQ+vWqQRM9/ft0Z9JD2XjtH/QP3EOMP5LBEagAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="font">
          <p>30</p>
          <h4>待审课件</h4>
        </div>
      </div>
      <div class="box" style="background-color: rgb(238, 112, 109);">
<div class="circle">
<img style="width:30px;height:30px;margin-left:16px;margin-top:14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEzvUmDvUmDwUV/yUV/vUV/vUV/vUV/vUmAx1xwNAAAACHRSTlMAgH5LIefKopwUTsQAAALtSURBVHja7ZzNb9NAEMVDnA+OrYREjlVFpRzbIqiPuYByTAUSPlYQKh+LBMjHljRh/mxK6q09613Hid9GAr13amNrf96Z2Znd1pNOp6KurIW44BchhBBCSEjI+fFfHW1xYQfIeP3z7RYXNmmCgEzqGRe3CMjJizrGW4FARvK9joGCyIGPMRQcZHnqZvQSIETu3JCxICEy9xkLCVk6ArmXgiGyqELeCRoiR06vgyGVqQxEmmSiZhdyiNhhnIWAfHTeA4KM88FW+p6pgVwhIFGaj6aTS+52+YWpjMYwi+pCLBZQ6/L7Jh/PZa05qsabFVG2V2o5qv1GIn/s++KOyJoIAJIP+buyEouUBtgS5WtlYs9tgdx3DWynZPYHAEjv8YOZtUpK8Ratt23H1bG2uJBp60RqIaIUa88P7ZlBNNDm6XtqTDt1dXhN7WiDqKcfPbbXDUaP4XTT2VD32ykr1Q7z2z0aMipVQZMeZ2hIrJ49UfMKBBHlIZimytV7hBygIc9VsgoKuSOEEEII2RdEbdXODptrG4jzBNhEO0NGhBBCCCGtIawnhBBCCCGEEEIIIf8RhHthQggh5F+E7OUvd6wnhBBCCCGEEEIIIfuB8N+yhBBCCCGsJ4QQQgghLoh5KTnZH+QGDdHvcAd65V1Dgr68byCB2hDGathxiEYa8+wzNa8VGqJdHbTJxQRtP0gfwjPdnTmUEJ7va/tU+9xwEVx42tN32k6pFbNZgEatyPZBHMBelWgaCD7bZ7YLIhF0F1VUbcpN4K6fVh87FnAjoGlkLdcP4xTYqs9bclWq6hkIKMC6zuFMv7d8gBgrdXZ8P9mr7hsgGuvpAHjqdNSDvrSex4l44iguDpef2xWWs1R8YRSVjrDL62+HO+rldWESR63d5iDdUFe+QgbUauLbwQSdiPYKQu51/R7K8H1NCdT3803ZACB/euomMIfULGgU5bI2aUQ/EIyN6e+i9WQ+vWqQRM9/ft0Z9JD2XjtH/QP3EOMP5LBEagAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="font">
          <p>30</p>
          <h4>待审课件</h4>
        </div>
      </div>
      <div class="box" style="background-color: rgb(247, 218, 71);">
<div class="circle">
<img style="width:30px;height:30px;margin-left:16px;margin-top:14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEzvUmDvUmDwUV/yUV/vUV/vUV/vUV/vUmAx1xwNAAAACHRSTlMAgH5LIefKopwUTsQAAALtSURBVHja7ZzNb9NAEMVDnA+OrYREjlVFpRzbIqiPuYByTAUSPlYQKh+LBMjHljRh/mxK6q09613Hid9GAr13amNrf96Z2Znd1pNOp6KurIW44BchhBBCSEjI+fFfHW1xYQfIeP3z7RYXNmmCgEzqGRe3CMjJizrGW4FARvK9joGCyIGPMRQcZHnqZvQSIETu3JCxICEy9xkLCVk6ArmXgiGyqELeCRoiR06vgyGVqQxEmmSiZhdyiNhhnIWAfHTeA4KM88FW+p6pgVwhIFGaj6aTS+52+YWpjMYwi+pCLBZQ6/L7Jh/PZa05qsabFVG2V2o5qv1GIn/s++KOyJoIAJIP+buyEouUBtgS5WtlYs9tgdx3DWynZPYHAEjv8YOZtUpK8Ratt23H1bG2uJBp60RqIaIUa88P7ZlBNNDm6XtqTDt1dXhN7WiDqKcfPbbXDUaP4XTT2VD32ykr1Q7z2z0aMipVQZMeZ2hIrJ49UfMKBBHlIZimytV7hBygIc9VsgoKuSOEEEII2RdEbdXODptrG4jzBNhEO0NGhBBCCCGtIawnhBBCCCGEEEIIIf8RhHthQggh5F+E7OUvd6wnhBBCCCGEEEIIIfuB8N+yhBBCCCGsJ4QQQgghLoh5KTnZH+QGDdHvcAd65V1Dgr68byCB2hDGathxiEYa8+wzNa8VGqJdHbTJxQRtP0gfwjPdnTmUEJ7va/tU+9xwEVx42tN32k6pFbNZgEatyPZBHMBelWgaCD7bZ7YLIhF0F1VUbcpN4K6fVh87FnAjoGlkLdcP4xTYqs9bclWq6hkIKMC6zuFMv7d8gBgrdXZ8P9mr7hsgGuvpAHjqdNSDvrSex4l44iguDpef2xWWs1R8YRSVjrDL62+HO+rldWESR63d5iDdUFe+QgbUauLbwQSdiPYKQu51/R7K8H1NCdT3803ZACB/euomMIfULGgU5bI2aUQ/EIyN6e+i9WQ+vWqQRM9/ft0Z9JD2XjtH/QP3EOMP5LBEagAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="font">
          <p>30</p>
          <h4>待审课件</h4>
        </div>
      </div>
      <div class="box" style="background-color: rgb(88, 202, 154);">
<div class="circle">
<img style="width:30px;height:30px;margin-left:16px;margin-top:14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEzvUmDvUmDwUV/yUV/vUV/vUV/vUV/vUmAx1xwNAAAACHRSTlMAgH5LIefKopwUTsQAAALtSURBVHja7ZzNb9NAEMVDnA+OrYREjlVFpRzbIqiPuYByTAUSPlYQKh+LBMjHljRh/mxK6q09613Hid9GAr13amNrf96Z2Znd1pNOp6KurIW44BchhBBCSEjI+fFfHW1xYQfIeP3z7RYXNmmCgEzqGRe3CMjJizrGW4FARvK9joGCyIGPMRQcZHnqZvQSIETu3JCxICEy9xkLCVk6ArmXgiGyqELeCRoiR06vgyGVqQxEmmSiZhdyiNhhnIWAfHTeA4KM88FW+p6pgVwhIFGaj6aTS+52+YWpjMYwi+pCLBZQ6/L7Jh/PZa05qsabFVG2V2o5qv1GIn/s++KOyJoIAJIP+buyEouUBtgS5WtlYs9tgdx3DWynZPYHAEjv8YOZtUpK8Ratt23H1bG2uJBp60RqIaIUa88P7ZlBNNDm6XtqTDt1dXhN7WiDqKcfPbbXDUaP4XTT2VD32ykr1Q7z2z0aMipVQZMeZ2hIrJ49UfMKBBHlIZimytV7hBygIc9VsgoKuSOEEEII2RdEbdXODptrG4jzBNhEO0NGhBBCCCGtIawnhBBCCCGEEEIIIf8RhHthQggh5F+E7OUvd6wnhBBCCCGEEEIIIfuB8N+yhBBCCCGsJ4QQQgghLoh5KTnZH+QGDdHvcAd65V1Dgr68byCB2hDGathxiEYa8+wzNa8VGqJdHbTJxQRtP0gfwjPdnTmUEJ7va/tU+9xwEVx42tN32k6pFbNZgEatyPZBHMBelWgaCD7bZ7YLIhF0F1VUbcpN4K6fVh87FnAjoGlkLdcP4xTYqs9bclWq6hkIKMC6zuFMv7d8gBgrdXZ8P9mr7hsgGuvpAHjqdNSDvrSex4l44iguDpef2xWWs1R8YRSVjrDL62+HO+rldWESR63d5iDdUFe+QgbUauLbwQSdiPYKQu51/R7K8H1NCdT3803ZACB/euomMIfULGgU5bI2aUQ/EIyN6e+i9WQ+vWqQRM9/ft0Z9JD2XjtH/QP3EOMP5LBEagAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="font">
          <p>30</p>
          <h4>待审课件</h4>
        </div>
      </div>
      <div class="box" style="background-color: rgb(68, 126, 255);">
<div class="circle">
<img style="width:30px;height:30px;margin-left:16px;margin-top:14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEzvUmDvUmDwUV/yUV/vUV/vUV/vUV/vUmAx1xwNAAAACHRSTlMAgH5LIefKopwUTsQAAALtSURBVHja7ZzNb9NAEMVDnA+OrYREjlVFpRzbIqiPuYByTAUSPlYQKh+LBMjHljRh/mxK6q09613Hid9GAr13amNrf96Z2Znd1pNOp6KurIW44BchhBBCSEjI+fFfHW1xYQfIeP3z7RYXNmmCgEzqGRe3CMjJizrGW4FARvK9joGCyIGPMRQcZHnqZvQSIETu3JCxICEy9xkLCVk6ArmXgiGyqELeCRoiR06vgyGVqQxEmmSiZhdyiNhhnIWAfHTeA4KM88FW+p6pgVwhIFGaj6aTS+52+YWpjMYwi+pCLBZQ6/L7Jh/PZa05qsabFVG2V2o5qv1GIn/s++KOyJoIAJIP+buyEouUBtgS5WtlYs9tgdx3DWynZPYHAEjv8YOZtUpK8Ratt23H1bG2uJBp60RqIaIUa88P7ZlBNNDm6XtqTDt1dXhN7WiDqKcfPbbXDUaP4XTT2VD32ykr1Q7z2z0aMipVQZMeZ2hIrJ49UfMKBBHlIZimytV7hBygIc9VsgoKuSOEEEII2RdEbdXODptrG4jzBNhEO0NGhBBCCCGtIawnhBBCCCGEEEIIIf8RhHthQggh5F+E7OUvd6wnhBBCCCGEEEIIIfuB8N+yhBBCCCGsJ4QQQgghLoh5KTnZH+QGDdHvcAd65V1Dgr68byCB2hDGathxiEYa8+wzNa8VGqJdHbTJxQRtP0gfwjPdnTmUEJ7va/tU+9xwEVx42tN32k6pFbNZgEatyPZBHMBelWgaCD7bZ7YLIhF0F1VUbcpN4K6fVh87FnAjoGlkLdcP4xTYqs9bclWq6hkIKMC6zuFMv7d8gBgrdXZ8P9mr7hsgGuvpAHjqdNSDvrSex4l44iguDpef2xWWs1R8YRSVjrDL62+HO+rldWESR63d5iDdUFe+QgbUauLbwQSdiPYKQu51/R7K8H1NCdT3803ZACB/euomMIfULGgU5bI2aUQ/EIyN6e+i9WQ+vWqQRM9/ft0Z9JD2XjtH/QP3EOMP5LBEagAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="font">
          <p>30</p>
          <h4>待审课件</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  created(){
    
  },
  watch: {
    
  },
  computed:{
   
  },
  methods:{
    
  }
}
</script>
<style scoped>
    .top{
      background-color: rgb(255,255,255);
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .title{
     margin: 0 0 20px;

    }
    .bottom{
      background-color: rgb(255,255,255);
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .box{
      height: 102px;
      width: 23%;
      margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    display: inline-block;
    }
    .circle{
      width: 62px;
      height: 62px;
      background: #fff;
      border-radius: 50%;
      position: relative;
      top:20px;
      left:80px;
      z-index: 100;
    }
    .font{
       width: 100px;
      height: 62px;
      color:  #fff;
      position:relative;
      top:-60px;
      left:180px;
      z-index: 100;
    }
</style>