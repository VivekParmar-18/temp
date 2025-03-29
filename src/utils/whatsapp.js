export const generateWhatsAppMessage = (product) => {
    const message = `Hello! I'm interested in this product:
    
  *Product Type:* ${product.name || product.type}
  ${product.dimensions ? `*Dimensions:* ${product.dimensions}\n` : ''}
  ${product.style ? `*Style:* ${product.style}\n` : ''}
  *Features:* ${product.features.join(', ')}
  
  Please provide quotation details.`;
  
    return encodeURIComponent(message);
  };