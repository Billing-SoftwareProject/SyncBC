import express from 'express';
const router = express.Router();
import verifyToken from '../middleware.mjs'; // Import your authentication middleware.

import invoicesController from '../controllers/Invoices.mjs';



// Example route definition
router.get('/invoices', verifyToken,invoicesController.getInvoices);
router.get('/invoicesitem/:Name',verifyToken, invoicesController.getInvoiceItems);
router.post('/invoices', invoicesController.createInvoice);

export default router;
