import { Request, Response } from 'express';
import { AppDataSource } from '../index';
import { CapabilitySheet } from '../models/CapabilitySheet';
import { verifySignature } from '../utils/signature';

export async function uploadSheet(req: any, res: Response) {
  const { payload, signature, pubKey } = req.body;
  const raw = JSON.stringify(payload);
  if (!verifySignature(raw, signature, pubKey)) {
    return res.status(400).json({ error: 'Invalid signature' });
  }
  const repo = AppDataSource.getRepository(CapabilitySheet);
  const sheet = repo.create({
    tenant_id: req.user.tenantId,
    payload,
    signature,
  });
  await repo.save(sheet);
  res.status(201).json(sheet);
}
