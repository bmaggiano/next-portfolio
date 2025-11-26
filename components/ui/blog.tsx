"use client";

import { useState } from "react";
import { ContentCard } from "./contentCard";
import { blogContent } from "@/app/blogContent";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

const ITEMS_PER_PAGE = 6;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogContent.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogs = blogContent.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="mt-8">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <h2 className="text-white text-3xl mb-12 font-medium sm:text-3xl md:text-6xl">
          Blog
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {currentBlogs.map((blog, index) => (
          <ContentCard key={blog.id || index} {...blog} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      handlePageChange(currentPage - 1);
                    }
                  }}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50 text-gray-400 bg-transparent border-none hover:bg-transparent"
                      : "cursor-pointer text-white hover:text-gray-200 bg-transparent border-none hover:bg-transparent"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          isActive={currentPage === page}
                          className={
                            currentPage === page
                              ? "cursor-pointer text-white bg-transparent border-none hover:bg-transparent underline"
                              : "cursor-pointer text-gray-300 hover:text-white bg-transparent border-none hover:bg-transparent"
                          }
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis className="text-gray-400" />
                      </PaginationItem>
                    );
                  }
                  return null;
                }
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      handlePageChange(currentPage + 1);
                    }
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50 text-gray-400 bg-transparent border-none hover:bg-transparent"
                      : "cursor-pointer text-white hover:text-gray-200 bg-transparent border-none hover:bg-transparent"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </main>
  );
}
