import { Product } from "@/lib/types/ecommerce";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  // Split the feature string by commas if it contains multiple features
  const featureList = product.feature
    ? product.feature
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f)
    : [];

  return (
    <section className="py-12 border-t border-[#EFEFEF]">
      <div className="max-w-[800px]">
        {/* Main Title */}
        <h2 className="text-2xl font-bold text-[#111111] mb-6">
          {product.productName}
        </h2>

        {/* Long Description */}
        <div
          className="space-y-6 mb-12 text-[#222222] text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

        {/* Subheading and List (Features) */}
        {featureList.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#111111]">Key Features</h3>
            <ul className="space-y-4 text-[#222222] text-base list-disc pl-5">
              {featureList.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export const ProductDetailsSkeleton = () => {
  return (
    <section className="py-12 border-t border-[#EFEFEF]">
      <div className="max-w-[800px]">
        <Skeleton className="h-8 w-1/2 mb-6" />
        <div className="space-y-4 mb-12">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-7 w-1/3" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};
