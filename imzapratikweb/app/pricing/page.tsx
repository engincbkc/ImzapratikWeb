"use client"
import React from 'react';
import PricingPlanStyle1 from './PricingPlanStyle1';
import PricingPlanStyle2 from './PricingPlanStyle2';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Pricing() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Pricing</h1>
        <ul>
          <li>
            <Link href="/">Raporlarım</Link>
          </li>
          <li>Pricing</li>
        </ul>
      </div>

      <PricingPlanStyle1 />

      <PricingPlanStyle2 />
    </>
  );
}