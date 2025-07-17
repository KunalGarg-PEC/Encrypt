import { Router } from 'express';
import jwt from 'jsonwebtoken';
const router = Router();

router.post('/login', (req, res) => {
  const { user, pass } = req.body;
  // Dummy auth: replace with real logic
  if (user === 'admin' && pass === 'password') {
    const token = jwt.sign({ sub: user, tenantId: 'tenant-123' }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

export default router;
