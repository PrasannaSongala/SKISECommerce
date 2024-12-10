// routes/OrderInvoiceDetailRoutes.ts
import { Router } from 'express';
import { OrderInvoiceDetailController } from '../controllers/OrderInvoiceDetailController';

const router: Router = Router();

router.get('/', OrderInvoiceDetailController.getAllOrderInvoiceDetails);
router.get('/:id', OrderInvoiceDetailController.getOrderInvoiceDetailById);
router.post('/', OrderInvoiceDetailController.createOrderInvoiceDetail);
router.put('/:id', OrderInvoiceDetailController.updateOrderInvoiceDetail);
router.delete('/:id', OrderInvoiceDetailController.deleteOrderInvoiceDetail);

export default router;
