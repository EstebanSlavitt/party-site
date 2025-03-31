// src/PoliciesPage.jsx

export default function PoliciesPage() {
    const policies = [
      "All orders require a payment in full or 50% deposit. Deposits are non-refundable unless cancelled within 24 hours of placing the order.",
      "Orders placed within 7 days of their event delivery are final and would not receive a refund if cancelling within 24 hours.",
      "Payments must be made in full when placing orders for all orders $500 or less. For orders greater than $500, a 50% deposit payment can be made, and the remaining balance must made at least 3 days prior to the delivery day.",
      "CANCELLATION: You must cancel 7 or more days prior to your delivery day to receive a voucher for the full amount paid to use toward another event up to 13 months away. Cancellations made less than 3-6 days will only receive a voucher for 70% of the amount paid. Cancellations 3 days or less before the delivery day will only receive a 30% voucher.",
      "Cancellations of Tents: Cancellation of a tent 7+ days prior to delivery will receive a 70% voucher. Less than 7 days, a 30% voucher.",
      "CHANGES TO ORDERS: Additions or reductions should be made 7+ days before the delivery day. Changes made less than 7 days may incur fees or result in limited credit.",
      "Linens may not be cancelled or reduced in quantity within 7 days. If cancelled 7 or fewer days before delivery, no credit will be applied.",
      "DELIVERY: If no one is present during delivery or pickup, we may enter through the side gate unless otherwise instructed.",
      "If delivery is obstructed or access denied, we may need to leave. A $50 return fee applies, and your delivery may be rescheduled.",
      "Ensure sufficient space and clearance. If the space is inadequate upon arrival, your event may be cancelled without refund.",
      "Deliveries with stairs or over 200 feet from unloading require additional charges.",
      "We require a 3-foot wide gate or doorway to the delivery area. Narrower access may result in cancellation.",
      "Paths to delivery areas must be clear. A $40 fee applies if we must move items. Excess items may result in cancellation.",
      "Early deliveries may occur at no extra charge to accommodate busy schedules. We’ll notify you 1–2 days prior.",
      "Grass setups require sprinklers to be off. For tents and inflatables, we stake into grass or dirt. Notify us of any underground pipes.",
      "Tables and chairs do not include setup unless arranged for an additional fee.",
      "$50–200 cleaning fees apply for excessively dirty equipment.",
      "Customers are responsible for damage unless a damage waiver is purchased.",
      "Wet equipment returns may result in $50–150 fees.",
      "Do not relocate tents, stages, floors, or inflatables after setup. Doing so may void safety and cause damage.",
      "Equipment must be free of silly string, gum, food, tape, trash, or decorations at pickup."
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-pink-50 px-6 py-16">
        <div className="max-w-5xl mx-auto bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-extrabold text-center text-sky-700 mb-8">📄 Policies & Rental Terms</h1>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
            {policies.map((policy, i) => (
              <li key={i}>{policy}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  